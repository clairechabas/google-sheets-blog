import { google } from 'googleapis'

type Query = {
  id: string
}
type GetServerSideProps = {
  query: Query
}
type PostProps = {
  title: string
  content: string
}

// Generating our props server-side
export async function getServerSideProps({ query }: GetServerSideProps) {
  // Authenticating to Google
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  // Getting the data from Google Sheet
  const { id } = query
  // Using the ID passed in the URL to get the right row's data
  /**
   *  NOTE: In the pattern below, `posts` corresponds to the name
   * of the sheet, or tab, in your GSheets file. You can change that
   * by renaming your sheet/tab at the bottom or your GSheets file.
   * */
  const range = `posts!A${id}:C${id}`

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GSHEETS_FILE_ID,
    range,
  })

  const { values: values } = response.data

  const [title, content] = values ? values[0] : [null, null]

  return {
    props: {
      title,
      content,
    },
  }
}

export default function Post({ title, content }: PostProps) {
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  )
}
