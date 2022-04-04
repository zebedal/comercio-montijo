import Image from "next/image";
import styles from "./RegisterForm.module.scss";

const Step2 = () => {
  const onSelect = (data: any) => {
    console.log("Select files", data);
  };
  const onRemove = (id: any) => {
    console.log("Remove image id", id);
  };

  const onUpload = (data: any) => {
    console.log("Upload files", data);
  };

  const dataSources = [
    {
      id: 1,
      dataURL: "https://picsum.photos/seed/1/600",
    },
    {
      id: 2,
      dataURL: "https://picsum.photos/seed/2/600",
    },
    {
      id: 3,
      dataURL: "https://picsum.photos/seed/3/600",
    },
    {
      id: 4,
      dataURL: "https://picsum.photos/seed/4/600",
    },
    {
      id: 5,
      dataURL: "https://picsum.photos/seed/5/600",
    },
    {
      id: 6,
      dataURL: "https://picsum.photos/seed/6/600",
    },
    {
      id: 7,
      dataURL: "https://picsum.photos/seed/7/600",
    },
    {
      id: 8,
      dataURL: "https://picsum.photos/seed/8/600",
    },
    {
      id: 9,
      dataURL: "https://picsum.photos/seed/9/600",
    },
    {
      id: 10,
      dataURL: "https://picsum.photos/seed/10/600",
    },
  ];

  return <div className={styles.step}></div>;
};

export default Step2;
