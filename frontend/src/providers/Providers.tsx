import React, { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

function Providers({ children }: PropsWithChildren) {
	return <BrowserRouter>{children}</BrowserRouter>
}

export default Providers
