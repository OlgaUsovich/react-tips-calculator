export const customStyles = {
    control: (styles: any, state: any) => ({ // ??? типы
      ...styles,
      borderRadius: '30px',
      height: '68px',
      textAlign: 'center',
      color: '#756C6C',
      border: state.isFocused ? '2px solid rgba(117, 108, 108, 0.57)' : 0,
      boxShadow: state.isFocused ? '2px solid rgba(117, 108, 108, 0.57)' : 0,
    '&:hover': {
       border: state.isFocused ? '2px solid rgba(117, 108, 108, 0.57)' : 0
    }
      
    }),

    input: (styles: any) => ({ // ??? типы
        ...styles,
        color: '#756C6C',
        fontSize: '18px',
      }),
    indicatorSeparator: () => ({
        display: 'none',
      }),
    indicatorContainer: (styles: any) => ({ // ??? типы
        ...styles,
        color: '#756C6C',
        width: '22px',
        heigth: '10px',
      }),
    
    
}