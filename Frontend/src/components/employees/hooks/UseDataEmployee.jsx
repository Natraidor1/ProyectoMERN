import { set } from "mongoose";
import React, {useState, useEffect, use} from "react";
import toast from "react-hot-toast";

const useDataEmployees = () => {
    const ApiRegister = "http://localhost:4000/api/registerEmployees";
    const ApiEmployees = "http://localhost:4000/api/employees";

    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dui, setDui] = useState("");
    const [isVerified, setIsVerified] = useState(true);
    const [issnumber, setIssnumber] = useState("");
    const [errorEmployee, setErrorEmployee] = useState(null);
    const [success, setSuccess] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);


    const cleanData = () => { 
        setId("");
        setName("");
        setLastName("");
        setBirthday("");
        setEmail("");
        setAddress("");
        setPassword("");
        setHireDate("");
        setTelephone("");
        setDui("");
        setIsVerified("");
        setIssnumber("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !lastName || !birthday || !email || !address || !password || !hireDate || !telephone || !dui || !isVerified || !issnumber) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        try {
            const newEmployee = {
                name,
                lastName,
                birthday,
                email,
                address,
                password,
                hireDate,
                telephone,
                dui,
                isVerified,
                issnumber
            };
            
            console.log(newEmployee, "nuevo empleado");

            const response = await fetch(ApiRegister, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEmployee),
            });

            if (!response.ok) {
                throw new Error("Error al registrar el empleado");
            }

            const data = await response.json();
            toast.success("Empleado registrado con éxito");
            setEmployees(data);
            setSuccess("Empleado registrado con éxito");
            cleanData();
            fetchData();

        } catch (error) {
            setErrorEmployee(error.message);
            console.error("Error al registrar el empleado:", error);
            alert("Error al registrar el empleado");
            toast.error("Error al registrar el empleado");
            
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(ApiEmployees);
            if (!response.ok) {
                throw new Error("Error al obtener los empleados");
            }
            const data = await response.json();
            console.log(data);
            setEmployees(data);
        } catch (error) {
            console.error("Error al obtener los empleados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteEmployee = async (id) => {
        try {
            const response = await fetch(`${ApiEmployees}/${id}`, {
                method: "DELETE",
                body: JSON.stringify({deleteEmployee}),
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el empleado");
            }

            const result = await response.json();
            console.log("eliminado",result);
            toast.success("Empleado eliminado con éxito")
            fetchData();
        } catch (error) {
            console.error("Error al eliminar el empleado:", error);
        }
    };

    const updateEmployee = async (dataEmployee) => {
        setId(dataEmployee._id);
        setName(dataEmployee.name); 
        setLastName(dataEmployee.lastName);
        setBirthday(dataEmployee.birthday);
        setEmail(dataEmployee.email);
        setAddress(dataEmployee.address);
        setPassword(dataEmployee.password);
        setHireDate(dataEmployee.hireDate);
        setTelephone(dataEmployee.telephone);
        setDui(dataEmployee.dui);
        setIsVerified(dataEmployee.isVerified);
        setIssnumber(dataEmployee.issnumber);
        setErrorEmployee(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => { 
        e.preventDefault();

        if (!name || !lastName || !birthday || !email || !address || !password || !hireDate || !telephone || !dui || !isVerified || !issnumber) {
            toast.error("Por favor completa todos los campos");
            return;
        }

        try {
            const updatedEmployee = {
                name,
                lastName,
                birthday,
                email,
                address,
                password,
                hireDate,
                telephone,
                dui,
                isVerified,
                issnumber
            };

            const response = await fetch(`${ApiEmployees}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedEmployee),
            });

            if (!response.ok) {
                throw new Error("Error al actualizar el empleado");
            }

            toast.success("Empleado actualizado con éxito");
            setSuccess("Empleado actualizado con éxito");
            cleanData();
            setId("");
            setActiveTab("list");
            fetchData();

        } catch (error) {
            setErrorEmployee(error.message);
            alert("error al actualizar el empleado");
            console.error("Error al actualizar el empleado:", errorEmployee);
        } finally {
            setLoading(false);
        }
    }

    return(
        activeTab,
        setActiveTab,
        id,
        setId,
        name,
        setName,
        lastName,
        setLastName,
        birthday,
        setBirthday,
        email,
        setEmail,
        address,
        setAddress,
        password,
        setPassword,
        hireDate,
        setHireDate,
        telephone,
        setTelephone,
        dui,
        setDui,
        isVerified,
        setIsVerified,
        issnumber,
        setIssnumber,
        errorEmployee,
        setErrorEmployee,
        success,
        setSuccess,
        employees,
        setEmployees,
        loading,
        setLoading,
        handleSubmit,
        fetchData,
        deleteEmployee,
        updateEmployee,
        handleUpdate
    );
};

export default useDataEmployees;