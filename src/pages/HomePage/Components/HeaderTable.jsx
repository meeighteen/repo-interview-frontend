import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import FormModal from "../../../components/Form/FormModal";
import Modal from "../../../components/Modal/Modal";


const HeaderTable = ({data, setData}) => {
    const [searchText, setSearchText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
      console.log("text ", searchText )
      setData(data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      ))
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='HeaderTable' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0px 20px 10px 20px', padding:'0px 20px 0px 20px'}}>
                <Input 
                    id={'search'} 
                    type={'text'}  
                    onChange={handleSearchChange} 
                    placeholder={'Search...'} 
                    value={searchText}
                    style={{ borderRadius: '6px', border: '2px solid #cccccc', paddingLeft:'10px' }}/>
                <Button 
                    onClick={handleOpenModal} 
                    style={{ backgroundColor:'rgb(255, 221, 0)', color:'rgb(15, 38, 92)', height:'40px', width:'80px', borderRadius:'3px', border:'0px', fontWeight: '600', fontSize:'12px'}}>
                    Agregar
                </Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h1>Formulario de registro</h1>
                <hr />
                <FormModal></FormModal>
            </Modal>
        </>
    )
}

export default HeaderTable;