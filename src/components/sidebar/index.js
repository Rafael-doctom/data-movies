
import * as S from './style.js'

const Sidebar = () => {
    return (
        <>
            <S.Content>
                <S.List>
                    <S.ListItem>
                        <S.ImageIcon src="./assets/icons/search-icon.svg" alt='icon' />
                    </S.ListItem>
                    <S.ListItem>
                        <S.ImageIcon src="./assets/icons/home-svgrepo-com.svg" alt='icon' />
                    </S.ListItem>
                    <S.ListItem>
                        <S.ImageIcon src="./assets/icons/search-icon.svg" alt='icon' />
                    </S.ListItem>
                    <S.ListItem>
                        <S.ImageIcon src="./assets/icons/home-svgrepo-com.svg" alt='icon' />
                    </S.ListItem>
                </S.List>
            </S.Content>
        </>
    )
};

export default Sidebar;