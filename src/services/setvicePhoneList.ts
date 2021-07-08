import { ITelephoneBook } from "../model/phone";

class PhoneBookService {

 static getAllPhones = () => {
		/**
		 * TODO получить данные из локал стора
		 */
		const phoneList = localStorage.getItem("phoneList")

		return phoneList !== null 
			? JSON.parse(phoneList) : []
	}

static addPhone = async (data: ITelephoneBook[]) => {
		/**
		 * TODO добавить данные в локал стор
		 */
		localStorage.setItem('phoneList', JSON.stringify(data));

	}
}



export default PhoneBookService;