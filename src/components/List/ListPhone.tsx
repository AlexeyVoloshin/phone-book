import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar } from 'antd';

import s from './List.module.scss';
import { ITelephoneBook } from '../../model/phone';
import PhoneBookService from '../../services/setvicePhoneList';

const ListPhone = () => {
  const [data, setData] = useState<ITelephoneBook[]>([]);

  useEffect(() => {
    const getData = PhoneBookService.getAllPhones();
    sortList(getData);
  }, []);

  const sortList = (getData: ITelephoneBook[]) => {
    const list: ITelephoneBook[] = getData.sort((a, b) => {
      if (a.name.last < b.name.last) return -1;
      if (a.name.last > b.name.last) return 1;
      return 0;
    });
    setData(list);
  };

  return (
    <List
      className={s.list}
      //   loading
      itemLayout="horizontal"
      //   loadMore={loadMore}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Link to={`/edit/${item.id}`} key="list-loadmore-edit">
              edit
            </Link>,
            <Link to={`/${item.id}`} key="list-loadmore-more">
              more
            </Link>,
          ]}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.name.last}</a>}
            description={item.phone}
          />
        </List.Item>
      )}
    />
  );
};

export default ListPhone;
