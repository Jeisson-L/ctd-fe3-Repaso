import Home, { getServerSideProps } from '@/pages'
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';



jest.mock('next/router', () => ({
    useRouter: () => ({
        locale: 'ES-ES',
        asPath: "/",
    })
}))

const mockData = [
    {
        id: 1,
        title: "Mochila con correas",
        price: 7500,
        description:
            "Tu mochila perfecta para el dìa a dìa y salidas de fin de semana. Guarda tu notebook (hasta 15 pulgadas) en la funda acolchada, y protégela de los rayones y golpes",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 4,
    },
]

window.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockData),
    })
) as jest.Mock

describe('Home Page', () => {
    test('Deberia mostrar los datos del servidor', async () => {
        const response = await getServerSideProps({ locale: 'ES-ES' })
        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    data: mockData
                }
            })
        )
    })
    test('Home', async () => {
        render(<Home data={mockData} />)
        screen.debug()
    })
})
