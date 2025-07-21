
export default function Book({ name, price, index }) {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}