import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './heaader.styles'


import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'> <Logo className='logo' /></LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
            {
                hidden ? null : <CartDropdown />
            }
        </OptionsContainer>
    </HeaderContainer >
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);