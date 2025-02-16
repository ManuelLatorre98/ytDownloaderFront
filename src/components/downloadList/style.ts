import colors from "@/components/colors";

const DownloadListStyle={
  container:{
    display:'flex',
    flexDirection:'column' as 'column',
    alignSelf:'start',
    height:'100%',
    //border:'1px solid #212121',
    gridColumn:'3/4',
    justifyContent:'start',
    alignItems: 'center',
    margin:'1rem',
    overflow: 'hidden',
  },
  titleContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    padding:'1rem 0',
    //borderBottom:'1px solid #212121',
    color:'#fff',
    fontSize:'1.5rem',
  },
  songsContainer:{
    marginTop:'1rem',
    display:'flex',
    flexDirection:'column' as 'column',
    width:'100%',
    height:'100%',
    overflowY:'auto' as 'scroll',
    maxHeight:'70vh',
    //borderTop:'1px solid #212121
  },
  button:{
    marginTop: '3rem',
    height: '3rem',
    width:'70%',
    fontSize: '1.5rem',
    borderRadius: '3rem',
    border: `none`,
    backgroundColor: `${colors.lines}`,
    color: `${colors.whiteFont}`,
    cursor: 'pointer',
  },
  buttonClear:{
    marginTop: '.8rem',
    height: '3rem',
    width:'40%',
    fontSize: '.8rem',
    borderRadius: '3rem',
    border: `none`,
    backgroundColor: `${colors.lines}`,
    color: `${colors.whiteFont}`,
    cursor: 'pointer',
  }
}

export default DownloadListStyle
