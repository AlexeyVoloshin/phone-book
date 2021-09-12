import { ITelephoneBook } from '../model/phone';

class PhoneBookService {
  static getAllPhones = () => {
    /**
     * TODO get data from the local store check if the link to the link is loaded from the file to the side
     */
    const phoneList = localStorage.getItem('phoneList');

    return phoneList !== null ? JSON.parse(phoneList) : [];
  };

  static addPhone = async (data: ITelephoneBook[]) => {
    /**
     * TODO add data to local store
     */
    localStorage.setItem('phoneList', JSON.stringify(data));
  };
}

export default PhoneBookService;
