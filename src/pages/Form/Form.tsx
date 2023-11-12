import { Button, Form as FormAntd, Input } from "antd";

import { v4 } from "uuid";

import styles from "./Form.module.scss";

const { TextArea } = Input;

type FieldType = {
  title: string;
  description: string;
  image: string;
};

interface IFetchBody {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const Form = () => {
  const addMenu = async (body: IFetchBody) => {
    try {
      const response = await fetch("http://localhost:5000/add-menu", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const resData = await response.json();
      console.log("resData", resData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
    }
  };

  const onFinish = (values: FieldType) => {
    const valuesWithId = {
      ...values,
      id: v4(),
    };

    addMenu(valuesWithId);
  };

  return (
    <FormAntd
      name="add-menu"
      className={styles.form}
      onFinish={onFinish}
      autoComplete="off"
    >
      <FormAntd.Item
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input className={styles.input} placeholder="Input title" />
      </FormAntd.Item>

      <FormAntd.Item
        name="description"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <TextArea placeholder="Input description" />
      </FormAntd.Item>

      <FormAntd.Item
        name="image"
        rules={[{ required: true, message: "Please input image path!" }]}
      >
        <Input placeholder="Add image path" />
      </FormAntd.Item>

      <FormAntd.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormAntd.Item>
    </FormAntd>
  );
};
