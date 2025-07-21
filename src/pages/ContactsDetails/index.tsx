import Details from '../../components/Details'
import Navbar from '../../components/Navbar'
import { ContainerDetails } from '../../styles'

const ContactDetails = () => {
  return (
    <ContainerDetails>
      <Navbar onDetails={true} />
      <Details />
    </ContainerDetails>
  )
}

export default ContactDetails
