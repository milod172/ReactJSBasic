import { useState, useEffect } from "react";

export default function useFetchData(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(setData)
            .catch((err) => {
                setError(err.message || "Đã xảy ra lỗi khi fetch dữ liệu");
            });
    }, [url]);

    return { data, error };
}