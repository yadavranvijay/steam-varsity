import React from "react";
import { Divider } from "antd";
import courseData from "./CourseData";
import {  Form, Input, Select } from "antd";

const Forme = ({ display }) => {

    const [form] = Form.useForm(); 
  
    const onFinish = async (values) => {
      try {
        const response = await fetch('https://formspree.io/f/xwkgeglk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          // Handle success
          alert('Form successfully submitted')
          console.log('Form successfully submitted');
          form.resetFields(); 
        } else {
          // Handle errors
          console.error('Form submission failed');
        }
      } catch (error) {
        // Catch and handle network errors
        console.error('Network error:', error);
      }
   


    
  };
  return (
    <div className="form-wrapper page-form-wrapper ">
      {
        // <form action='https://formspree.io/f/xwkgeglk' method='POST'>
        //   <Divider className={display}>Join STEAM Varsity </Divider>
        //   <div class="mb-3">
        //     <input
        //       type="text"
        //       class="form-control"
        //       placeholder="First Name"
        //       name="firstName"
        //       required
        //     />
        //   </div>
        //   <div class="mb-3">
        //     <input
        //       type="text"
        //       class="form-control"
        //       placeholder="Last Name"
        //       name="lastName"
        //       required
        //     />
        //   </div>
        //   <div class="mb-3">
        //     <input
        //       type="email"
        //       class="form-control"
        //       placeholder="Email"
        //       name="email"
        //       required
        //     />
        //   </div>
        //   <div class="mb-3">
        //     <input
        //       type="number"
        //       class="form-control"
        //       placeholder="Phone Number"
        //       name="number"
        //       required
        //     />
        //   </div>
        //   <div class="mb-3">
        //     <select class="form-select" name="community" aria-label="Default select example">
        //       <option value="">Community type</option>
        //       <option value="Student">Student</option>
        //       <option value="Parent"> Parent</option>
        //       <option value="Educator">Educator</option>
        //       <option value="Partner">Partner</option>
        //     </select>
        //   </div>
        //   <div class="mb-3">
        //     <select class="form-select" name="topic" aria-label="Default select example">
        //      <option value="">Choose your interesting topic</option>
        //     {courseData.data.map((item, index) => (
        //       <option value={item.heading}>{item.heading}</option>
        //     ))}
        //     </select>
        //   </div>
        //   <button htmlType="submit" class="btn ">
        //     Submit
        //   </button>
        // </form>
      }

      <Form form={form} onFinish={onFinish} id="survey_submit_form" layout="vertical">
      <Divider className={display}>Join STEAM Varsity </Divider>
        <Form.Item name="firstName">
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="phone-number">
          <Input placeholder="Phone Number" type="number" />
        </Form.Item>
        <Form.Item
        name="interesting-topic"
          rules={[
            {required: true,},
             ]}> 
          <Select
            mode="multiple"
            allowClear
            placeholder="Choose your interesting topic "
          >
            {courseData.data.map((item) => (
              <Select.Option key={item.heading} value={item.heading}>
                {item.heading}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
        name="community-type"
          rules={[
            {required: true,},
             ]}> 
          <Select
            mode="multiple"
            allowClear
            placeholder="Community type "
          >
            
              
                     <Select.Option value="Student">Student</Select.Option>
                     <Select.Option value="Parent"> Parent</Select.Option>
                     <Select.Option value="Educator">Educator</Select.Option>
                     <Select.Option value="Partner">Partner</Select.Option>
          </Select>
        </Form.Item>

        <button className="btn form-btn" htmlType="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Forme;
