import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ISidebarProps {
  isActiveSB: boolean;
  setIsActiveSB: () => void;
}

interface ICategories {
  name: string;
  id: string;
  createdAt?: string;
}

function Sidebar({ isActiveSB, setIsActiveSB }: ISidebarProps) {
  const [categories, setCategories] = useState<ICategories[]>([]);
  useEffect(() => {
    axios.get<ICategories[]>('/categories').then(({ data }) => setCategories(data));
  }, []);
  return (
    <div className={isActiveSB ? 'sidebar sidebar--active' : 'sidebar'}>
      {categories.length !== 0 ? (
        <ul>
          {categories.map((obj: ICategories) => (
            <li key={obj.id}>
              <Link to={`/${obj.id}`} onClick={() => setIsActiveSB()}>
                <span>{obj.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>Нет данных</span>
      )}
    </div>
  );
}

export default Sidebar;
