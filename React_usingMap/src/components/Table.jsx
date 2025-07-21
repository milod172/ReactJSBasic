export default function Table({ theaders, dataList }) {
    return (
        <table>
            <thead>
                <tr>
                    {theaders.map((item, index) => (
                        <th key={index}>{item.key}</th>
                    ))}
                </tr>
            </thead>

            <tbody >
                {dataList.map((item, index) => (
                    <tr key={index}>
                        {theaders.map((header, i) => (
                            <td key={i}>{header.value(item, index)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}