import { InitialContactsList } from 'components/InitialContactsList/InitialContactsList';
import { LiStyle, UlStyle } from './ContactsStyled';

export const Contacts = ({ ContactList, onDelete }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        {ContactList.map(list => {
          return (
            <LiStyle key={list.id}>
              <InitialContactsList item={list} onDelete={onDelete} />
            </LiStyle>
          );
        })}
      </UlStyle>
    </div>
  );
};
