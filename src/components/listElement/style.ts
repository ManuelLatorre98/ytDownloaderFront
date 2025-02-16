import colors from "@/components/colors";

const ListElementStyle={
  container:{
    display:'flex',
    height:'4rem',
    width:'100%',
    borderBottom:`1px solid ${colors.lines}`,
    padding:'0 1rem',
    alignItems:'center',

  },
  containerHover:{
    backgroundColor: `${colors.lines}`,
  },
  crossContainer:{
    display :'flex',
    justifySelf:'start',
    marginLeft: 'auto',
    marginRight: '1rem',
    width:'2rem',
    height:'70%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

  },
  trash:{
    color: `${colors.whiteFont}`,
  },
  trashHover:{
    color: `${colors.error}`
  },
  imageContainer:{
    width:'3rem',
    height:'3rem',
    overflow: 'hidden',
    position: 'relative' as any,
  },

  songTitleContainer:{
    width: '60%',
    margin: '1rem',
    color: `${colors.whiteFont}`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  songName:{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  author:{
    color: `${colors.secondaryFont}`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  time:{
    marginLeft: 'auto',
    width:'100',
    color: `${colors.secondaryFont}`,
    fontSize: '1.1rem',

  }

}

export default ListElementStyle
