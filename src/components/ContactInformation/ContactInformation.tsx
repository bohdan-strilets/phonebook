import { useGetContactByIdQuery } from 'redux/contacts/contact-api';
import dateFormatting from 'utilities/dateFormatting';

import Loader from 'components/Loader';

import {
  Header,
  StarIcon,
  Body,
  Property,
  Group,
  Value,
  UseerIcon,
  PhoneIcon,
  EmailIcon,
  Footer,
} from './ContactInformation.styled';

const ContactInformation: React.FC<{ id: string }> = ({ id }) => {
  const { data, isFetching } = useGetContactByIdQuery({ contactId: id });
  const contact = data?.data;

  return (
    <>
      {isFetching && <Loader />}
      {contact && (
        <div>
          <Header>
            <p>
              ID: <span>{contact._id}</span>
            </p>
            {contact.favorite && <StarIcon />}
          </Header>

          <Body>
            <Property>
              <Group>
                <UseerIcon />
                <p>Name:</p>
              </Group>
              <Value>{contact.name}</Value>
            </Property>
            <Property>
              <Group>
                <PhoneIcon />
                <p>Phone:</p>
              </Group>
              <Value>{contact.phone}</Value>
            </Property>
            <Property>
              <Group>
                <EmailIcon />
                <p>Email:</p>
              </Group>
              <Value>{contact.email ? contact.email : '---'}</Value>
            </Property>
          </Body>

          <Footer>
            <p>Created: {dateFormatting(contact.createdAt)}</p>
            <p>Updated: {dateFormatting(contact.updatedAt)}</p>
          </Footer>
        </div>
      )}
    </>
  );
};

export default ContactInformation;
