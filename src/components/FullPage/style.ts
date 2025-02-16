import colors from "@/components/colors";

const FullPageStyle={
  container:{
    minHeight:'100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 6fr 3fr 1fr',
    overflow: 'hidden',

  },
  logo:{
    gridColumn:'1/2',
    height:'5rem',
    width:'5rem',
    marginLeft: '3rem',
    marginTop: '3rem',
  }
}

export default FullPageStyle
