import React from "react";
import { Divider } from "antd";
import courseData from "./CourseData";
import { Form, Input, Select } from "antd";

const HireForme = ({ display }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch("https://formspree.io/f/xwkgeglk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Handle success
        alert("Form successfully submitted");
        console.log("Form successfully submitted");
        form.resetFields();
      } else {
        // Handle errors
        console.error("Form submission failed");
      }
    } catch (error) {
      // Catch and handle network errors
      console.error("Network error:", error);
    }
  };
  return (
    <div className="form-wrapper page-form-wrapper ">
      <Form
        form={form}
        onFinish={onFinish}
        id="survey_submit_form"
        layout="vertical"
      >
        <Divider className={display}>
          Interest form to hire a facilitator
        </Divider>
        <Form.Item name="school/institution-name">
          <Input placeholder="School/Institution name" />
        </Form.Item>
        <Form.Item name="address">
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item name="coordinator-name">
          <Input placeholder="Authorized person/Coordinator name" />
        </Form.Item>
        <Form.Item name="designation">
          <Input placeholder="Designation" />
        </Form.Item>
        <Form.Item name="phone-number">
          <Input placeholder="Phone Number" type="number" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="website-url">
          <Input placeholder="Your website url" />
        </Form.Item>
      
        <button className="btn form-btn" htmlType="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default HireForme;
