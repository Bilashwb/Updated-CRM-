// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import {CubeOutline,HomeOutline,CurrencyInr,AccountGroup,AccountCashOutline,AccountChild,BookOpen,BriefcaseOutline,CashFast,BankTransfer} from 'mdi-material-ui'
import Router from 'next/router';

import { useEffect,useState } from "react";




const Adminnavigation = () => {
  const [role, setRole] = useState(null);
  useEffect(() => {
if(!localStorage.getItem('crzn'))
Router.push('/login');
else{
  let data=JSON.parse(localStorage.getItem('crzn'))
  setRole(data.role);
  
      if(!data.role){
        Router.push('/login')
      }
}

  }, []);


  let admin=[
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin'
    },
    {
      title: 'Employee',
      icon: AccountChild,
      path: '/admin/employee'
    },
    {
      title: 'Customer',
      icon: AccountGroup,
      path: '/admin/customer'
    },
    {
      title: 'Associate',
      path: '/admin/associate',
      icon: AccountCashOutline
    },
    {
      title: 'Invesment',
      icon: BookOpen,
      path: '/admin/invesment'
    },
    {
      title: 'Payout',
      icon: CurrencyInr,
      path: '/admin/payout'
    },
    {
      icon: BriefcaseOutline,
      title: 'Designation',
      path: '/admin/designation'
    },
    {
      icon: CashFast,
      title: 'Salary',
      path: '/admin/salary'
    },
    {
      icon: BankTransfer,
      title: 'Deposit',
      path: '/admin/deposit'
    },
    {
      icon: CubeOutline,
      title: 'All Request',
      path: '/admin/request'
    },
    {
      icon: CubeOutline,
      title: 'Others',
      path: '/admin/others'
    }
  ];


  let customer=[
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/customer/'
    },
    {
      title: 'Invesment',
      icon: AccountChild,
      path: '/customer/invesment'
    },
    {
      title: 'Nominee',
      icon: AccountGroup,
      path: '/customer/nominee'
    },
    {
      title: 'Bank Accounts',
      path: '/customer/bank',
      icon: AccountCashOutline
    },
    {
      title: 'Profile',
      icon: BookOpen,
      path: '/customer/profile'
    },
    {
      title: 'Payment',
      icon: CurrencyInr,
      path: '/customer/payments'
    }
  ]


  let associate=[
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/associate'
    },
    {
      title: 'Invesment',
      icon: AccountChild,
      path: '/associate/invesment'
    },
    {
      title: 'Customer',
      icon: AccountChild,
      path: '/associate/customer'
    },
    {
      title: 'Nominee',
      icon: AccountGroup,
      path: '/associate/nominee'
    },
    {
      title: 'Bank Accounts',
      path: '/associate/bank',
      icon: AccountCashOutline
    },
    {
      title: 'Profile',
      icon: BookOpen,
      path: '/associate/profile'
    },
    {
      title: 'Payment',
      icon: CurrencyInr,
      path: '/associate/payments'
    }
  ];

  let employee=[
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/employee/'
    },
    {
      title: 'Work Report',
      icon: AccountChild,
      path: '/employee/report'
    },
    {
      title: 'My Information',
      icon: AccountGroup,
      path: '/employee/info'
    },
    {
      title: 'Bank Accounts',
      path: '/employee/bank',
      icon: AccountCashOutline
    },
    {
      title: 'Salary History',
      icon: BookOpen,
      path: '/employee/salary'
    }
  ]
  if(role=='admin')
  return admin;
  else if(role=='customer')
  return customer;
  else if(role=='associate')
  return associate;
  else if(role=='employee')
  return employee
  else return [];

}

export default Adminnavigation;
