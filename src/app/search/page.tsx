// App Router에서 Page에 전달되는 쿼리 스트링이나 url 파라미터가 props를 통해 전달됨
// 그리고 지금은 서버 컴포넌트이기에 async를 붙일 수 있음
export default async function Page({searchParams}: {searchParams: Promise<{ q: string }>}) {
    const { q } = await searchParams;

    return <div>Search 페이지 : {q}</div>
}