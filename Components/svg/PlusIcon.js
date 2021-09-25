

const PlusIcon = ({color = 'var(--text-color)'}) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '5px'}}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill={color} />
    </svg>

)

export default PlusIcon