import "./TabButton.css"

export default function TabButton({ children, onSelect, isSelected }) {

    return (
        <>
            <button className={isSelected ? "active" : undefined} onClick={onSelect} >{children}</button>
        </>
    )
}