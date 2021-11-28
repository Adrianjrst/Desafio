import React, { useState, Suspense } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './fondo.gif'
import { LockClockOutlined as LockOutLinedIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	container: {
		opacity: '0.8',
		height: '70%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
  form: {
    width:'100%',
    marginTop: theme.spacing(1)
  },
  buttom:{
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = () => {

  const [body, setBody] = useState({nickname: '', password: ''})

  const navigate = useNavigate()

  const classes = useStyles()

  const handleChange = (e) => {
      setBody({
        ...body,
        [e.target.name]: e.target.value
      })
  }

  const onSubmit=()=>{
    if (body.nickname == 'Usuario' && body.password == 'asd123'){
    navigate('/app')
    }
    else{
      alert('¡UPS! Ese no es el hardcodeado')
    }
  }

  return (
    
<Grid container component='main' className={classes.root}>
<CssBaseline/>
    <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
      <div className={classes.div}>
      <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>Iniciar</Typography>
        <form className={classes.form}>
          <TextField 
            fullWidth
            autoFocus
            color='primary'
            margin='normal'
            variant='outlined'
            label='Nombre de usuario'
            name='nickname'
            value={body.nickname}
            onChange={handleChange}
          />
          <TextField 
            fullWidth
            type='password'
            color='primary'
            margin='normal'
            variant='outlined'
            label='Contraseña'
            name='password'
            value={body.password}
            onChange={handleChange}
          />
          <Button
          fullWidth
          variant='contained'
          color='secondary'
          className={classes.buttom}
          onClick={() => onSubmit()}
          >
            Ingresar
          </Button>
        </form>
      </div>
    </Container>
</Grid>
  )
}

export default Login
