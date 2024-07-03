import { Download } from '../home/components'
import { Ask } from './components'
import styles from './style.module.css'

export default function DownloadPage() {
  return (
    <section className={styles.downloadPages}>
      <Download
        title='Support multiple versions of Windows, Mac OS'
      />
      <Ask />
    </section>
  )
}
