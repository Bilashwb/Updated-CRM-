import {React,useState,useEffect} from 'react';
import {Grid,Box,Typography,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import { styled } from '@mui/material/styles';
import axios from 'axios';
import  AccountNew  from '../../../../components/Add/AccountNew';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function index() {
const [id, setid] = useState();
const [bank, setBank] = useState([]);  
useEffect(() => {
  if(localStorage.getItem('crzn') &&  JSON.parse(localStorage.getItem('crzn')).id ){
    setid(JSON.parse(localStorage.getItem('crzn')).id);
    let data = new FormData();
    data.append('user_id',id?id:JSON.parse(localStorage.getItem('crzn')).id);
    data.append('user_type',2);
    axios({
      method: "post",
      url: `http://localhost:9000/api/account/user`,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response)=> {
        setBank(response.data)
      })
      .catch((err)=> {
       console.log(err);
      });
  }
   

 else{
  setid(null);
 }
}, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" component="h5" sx={{textAlign:'center'}}> My Bank Account Information</Typography>
    <Grid container spacing={2} sx={{marginTop:'3%'}}>
      <Grid item xs={12} sm={12} md={12}>
        <Item>
        {bank?<>
          <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Account No</TableCell>
            <TableCell align="right">IFSC COde</TableCell>
            <TableCell align="right">Bank Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bank.map((row) => (
            <TableRow
              key={row.account_no}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.account_no}
              </TableCell>
              <TableCell align="right">{row.ifsc_code}</TableCell>
              <TableCell align="right">{row.bank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        
        </>:<Typography variant="h6" component="h6" sx={{textAlign:'center'}}> Sorry No Bank Account !</Typography>}
        </Item>
      </Grid>
    
    </Grid>
  </Box>
  )
}