import colors from "@/components/colors";

const YoutubeInputStyle={
  container:{
    display:'flex',
    //border:`1px solid ${colors.lines}`,
    borderRight:`1px solid ${colors.lines}`,
    gridColumn:'2/3',
    justifyContent:'center',
    alignItems:'center',
    margin:'1rem',

  },
  form:{
    gridColumn: '2/1',
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '100%',
    padding: '1rem',
    alignItems: 'center',
    color:`${colors.whiteFont}`,
  },
  titleLabel:{
    fontSize: '2rem',
  },
  inputText:{
    marginTop: '1rem',
    height: '3rem',
    fontSize: '1.5rem',
    borderRadius: '0.5rem',
    border: `1px solid ${colors.lines}`,
    padding: '0.5rem',
    width: '100%',
    backgroundColor: `${colors.lines}`,
  },

  invalidInputText:{
    border:'1px solid red',
    color:'red'
  },
  containerPreview:{
    border: `1px solid ${colors.lines}`,
    marginTop: '1rem',
  },
  button:{
    marginTop: '6rem',
    height: '3rem',
    width:'70%',
    fontSize: '1.5rem',
    borderRadius: '3rem',
    border: `none`,
    backgroundColor: `${colors.lines}`,
    color: `${colors.whiteFont}`,
    cursor: 'pointer',
  },
  onHover:{
    backgroundColor: `${colors.hover}`,
  },
  onClick:{
    backgroundColor: `${colors.click}`,
  },
  errorText:{
    color:'red',
    marginTop:'0.3rem',
    alignSelf:'start',
  },
  loadingText:{
    color:`${colors.whiteFont}`,
    marginTop:'0.3rem',
    alignSelf:'start',
  },

}

export default YoutubeInputStyle
