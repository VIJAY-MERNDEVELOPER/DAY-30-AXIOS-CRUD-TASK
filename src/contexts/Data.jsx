/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(true);
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  const [users, setUsers] = useState([]);
  const [viewData, setViewData] = useState({});
  const [formData, setFormData] = useState(defaultValue);
  const data = async () => {
    try {
      const res = await axios.get("/");

      if (res.status === 200) setUsers([...res.data]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePost = async (e, data) => {
    e.preventDefault();
    try {
      const res = await axios.post("/", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 201) {
        toast.success(`${res.data.name} user added successfully`);
        setFormData({ ...defaultValue });
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/${id}`);

      if (res.status === 200) {
        toast.success(`${res.data.username} deleted successfully`);
        data();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUpdate = async (e, id, data) => {
    e.preventDefault();
    try {
      if (id === data.id) {
        const res = await axios.put(`/${id}`, data);
        if (res.status === 200) {
          toast.success(`${res.data.username} user data updated successfully`);

          navigate("/dashboard");
          setIsEdit(false);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        users,
        setUsers,
        viewData,
        setViewData,
        handleDelete,
        isEdit,
        setIsEdit,
        formData,
        setFormData,
        handlePost,
        defaultValue,
        handleUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const UseData = () => {
  return useContext(DataContext);
};

export { DataContextProvider, UseData };
