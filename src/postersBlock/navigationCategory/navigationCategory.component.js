import React, {memo, useState} from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList } from './navigationCategory.styled';
import { links } from '../../global/constants/global.constants';

const NavigationCategory = ({activeNav, changeActiveNav}) => {
  return (
    <>
      <NavigationList>
        {links.map((link) => (
          <NavigationItem
            key={`${link.text}_${link.id}`}
            onClick={() => changeActiveNav(link.text)}
            selected={link.text === activeNav}
          >
            {link.text}
          </NavigationItem>
        ))}
        <SortComponent/>
      </NavigationList>
      <Line />
    </>
  );
};

export default memo(NavigationCategory);

const variantSorts = ['html','css','javascript']

const SortComponent = () =>{
    const [sortMethod, setSortMethod] = useState(()=>variantSorts[2]);
    const changeVariant = (variant)=> setSortMethod(variant);
   return (
        <div style={{ 'display': 'flex', 'justifyContent': 'spaceBetween', 'alignItems': 'center', 'minWidth': '175px'}}>
           <div> Sort by</div>
            <form>
                <select name="siti" defaultValue={variantSorts[2]} onChange={(e)=>changeVariant(e.target.value)}>
                    {variantSorts.map((variant,index)=><option key={index} value={variant}>{variant}</option>)}
                </select>
            </form>
        </div>
)};
