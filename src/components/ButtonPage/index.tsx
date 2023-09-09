import './styles.css';

type Props = {
    name: string;
}

function ButtonPage({name}: Props) {
    return (
        <div className='dce-button'>
            <p>{name}</p>
        </div>
    );
}

export default ButtonPage;
