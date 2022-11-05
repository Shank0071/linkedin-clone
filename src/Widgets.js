import './Widgets.css'
import { Info } from '@mui/icons-material'
import { FiberManualRecord } from '@mui/icons-material'

export default function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle("The King Is Back", "Top news - 9099 readers")}
        {newsArticle("The Ufc Big Day", "Charles Olivera vs Islam Makachev")}
        {newsArticle("P2P King", "Islam Challenges P2P King Alexander Vlokinowski")}
        {newsArticle("Redux vs Recoil", "We know who's gonna win")}
        {newsArticle("Crypto Crash", "Crypto hit a record low")}
    </div>
  )
}
