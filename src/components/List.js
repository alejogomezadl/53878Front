

const Lista = ({ usuarios }) => {

    return (
        <div>
            <p>lista</p>
            <ul>
                {
                    usuarios.map(ele => {
                        return (
                            <li>
                                nombre: {ele.gender}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Lista