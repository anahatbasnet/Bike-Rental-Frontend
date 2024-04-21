import React, { useState } from "react";
import Button from "../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://localhost:8080/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();

      if (responseData.statusCode === 200) {
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("refreshToken", responseData.refreshToken);
        setLoginStatus(responseData.message);
        navigate("/", {
          state: {
            userName: values,
          },
        });
      } else {
        console.error("Error logging in:", responseData.message);
        if (responseData.statusCode === 500) {
          setLoginStatus(responseData.message);
        } else {
          setLoginStatus("Login failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginStatus("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-[-10rem]">
        <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                  placeholder="Enter your registered email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {formik.isSubmitting ? "Logging In..." : "Login"}
              </Button>
              <p>
                Don't have an account? <Link to="/register">Register</Link>{" "}
              </p>
              {loginStatus && <p>{loginStatus}</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
