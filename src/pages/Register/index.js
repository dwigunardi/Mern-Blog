import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Form, Input, message } from "antd";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { ExampleContext } from "../../context/example";
function Register() {
  const Navigate = useNavigate();
  const [Message, setMessage] = useState("username atau password salah");
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [find, setFind] = useState();
 const AuthenticationUser = useContext(ExampleContext)

  const check = (data, values) => {
    const find = data.find((data) => {
      if (
        data.username == values.username &&
        data.password == values.password
      ) {
      }
    });
    return setFind(find);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    // check(AuthenticationUser, values);
    AuthenticationUser.AuthenticationUser.push({
      username : values.username,
      password : values.password
    })
    Navigate('../Auth/Login')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.info("username atau password tidak di temukan");
  };

  return (
    <div class="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 w-[600px] sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-l    from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Register</h1>
            </div>
            <div class=" divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <Form
                  name="form"
                  layout="vertical"
                  initialValues={{
                    remember: false,
                    username: "",
                    password: "",
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  aria-autocomplete="none"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input size="small" autoComplete="off" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password autoComplete="off" />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <button
                      type="submit"
                      className="px-5 py-2 border border-blue-500 rounded-lg hover:text-white hover:bg-blue-500"
                    >
                      Submit
                    </button>
                  </Form.Item>
                </Form>
                <Link to={"../Auth/Login"} relative="route">
                  <a>Login disini</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
