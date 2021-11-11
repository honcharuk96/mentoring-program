import React, {memo, useContext, useState} from 'react';
import { Line } from '../../global/globalStyles';
import { NavigationItem, NavigationList } from './navigationCategory.styled';
import { AppContext } from '../../App';

const NavigationCategory = () => {
  const { nav } = useContext(AppContext);
  return (
    <>
      <NavigationList>
        {nav.links.map((link, index) => (
          <NavigationItem
            key={`${link.text}_${link.id}`}
            onClick={() => nav.setActiveNav(link)}
            selected={nav.activeNav && nav.activeNav.id === index}
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
