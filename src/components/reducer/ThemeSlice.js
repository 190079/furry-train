import {createSlice} from "@reduxjs/toolkit"

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: localStorage.getItem('theme')
    },
    reducers:{
        darkTheme: state => {
            document.body.classList.add("darkmode")
            localStorage.setItem('theme',"dark");
            state.value = localStorage.getItem('theme');
            
        },
        lightTheme: state => {
            localStorage.removeItem("theme")
           document.body.classList.remove('darkmode');
           localStorage.setItem('theme',"light");
           state.value = localStorage.getItem('theme');
        }
    }
})

export const {darkTheme, lightTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;