import style from './NoProblem.module.scss/'
import No_Big_Problem from '../../assets/Images/No-Big-Problem.jpg'
export function NoProblem(props) {

    return (
        <section>{props.NoProblem}
            <img src={No_Big_Problem} alt=""/>
                <article>
                    <h2>INTET PROBLEM</h2>

                    <p>Leo-lov har altid været det bedste advokatfirma i verden.
                        Der er simpelthen ingen der kan måle sig med os. Vi kan løse
                        alle problemer så længe du har penge. Hvis du mod alt
                        forventning skulle oplevel at støde på et retsligt problem
                        som leo-lov ikke kan løse får du halvdelen af beløbet igen.

                    </p>

                    <p>

                        Det er sådan vi har skabt en forretning der ikke kan andet
                        end at vokse!
                    </p>
                </article>
        </section>

    )
}