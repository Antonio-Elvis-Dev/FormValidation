import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import CadastroCliente from '../pages/CadastroCliente'
import CadastroFucionario from '../pages/CadastroFucionario'
import CadastroProduto from '../pages/CadastroProduto'
import CadastroFornecedor from '../pages/CadastroFornecedor'
import CadastroConcorrente from '../pages/CadastroConcorrente'

export default function RoutesApp(){
return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cliente' element={<CadastroCliente/>}/>
        <Route path='/funcionario' element={<CadastroFucionario/>}/>
        <Route path='/produto' element={<CadastroProduto/>}/>
        <Route path='/fornecedor' element={<CadastroFornecedor/>}/>
        <Route path='/concorrente' element={<CadastroConcorrente/>}/>
    </Routes>
)
}