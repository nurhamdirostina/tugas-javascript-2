import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Select, Checkbox, Button } from "antd";
import moment from "moment";
import "./App.css";

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h3>Tambah Pengguna</h3>
        <hr></hr>
        {moment().format("dddd MMMM YYYY HH:mm")}
        <Form 
          layout="vertical" 
          wrapperCol={{ span: 8 }} 
          onFinish={(values)=>{
          values.pengirimancabang=values.pengirimancabang?"Ya":"Tidak"
            // if(values.pengirimancabang){
            //   values.pengirimancabang="Ya";
            // }
            // else{
            //   values.pengirimancabang="Tidak";
            // }
            console.log(values)
          }}
          onFinishFailed={(error)=>{
            console.log({error})
          }}
        >
          <Form.Item
            label="Kode"
            name="kode"
            rules={[
              {
                required: true,
                message: "silahkan masukan kode anda",
              },
              {
                validator: (_, value) => 
                (value && value.includes("A1@") 
                ? Promise.resolve() 
                : Promise.reject("kode harus ada  A1@")), 
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nama Lengkap"
            name="nama"
            rules={[
              {
                required: true,
                message: "silahkan masukan nama anda",
              },
              { min: 6, message: "nama minimal 6 karakter" },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Nomor Telepon"
            name="nomor telepon"
            rules={[
              {
                required: true,
                message: "silahkan masukan nomor telepon anda",
              },
              {
                validator: (_, value) => 
                (value && isNaN(parseFloat(value))
                ?  Promise.reject("harus diisi angka") 
                : Promise.resolve()) 
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "silahkan masukan email anda",
              },
              { type: "email", message: "harap masukkan email yang benar" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cabang"
            name="cabang"
            rules={[
              {
                required: true,
                message: "silahkan pilih cabang",
              },
            ]}>
            <Select
              placeholder="Pilih Cabang" >
              <Select.Option value="cimahi">Cimahi</Select.Option>
              <Select.Option value="bandung">Bandung</Select.Option>
              <Select.Option value="jakarta">Jakarta</Select.Option>
              <Select.Option value="bogor">Bogor</Select.Option>
              <Select.Option value="surabaya">Surabaya</Select.Option>
              <Select.Option value="riau">Riau</Select.Option>
              <Select.Option value="pekanbaru">Pekanbaru</Select.Option>
              <Select.Option value="tasikmalaya">Tasikmalaya</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item 
          valuePropName="checked" 
          name="pengirimancabang">
            <Checkbox> Lihat Pengiriman Cabang</Checkbox>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "please enter your address",
              },
            ]}>

            <Input
              type="address"
              name="address" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button htmlType="reset">Batal</Button>
            <Button type="primary" htmlType="submit"
            >
              Simpan
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;