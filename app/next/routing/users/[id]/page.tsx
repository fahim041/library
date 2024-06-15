interface Props {
    params: {
        id: string;
    }
}

export default function UserDetailPage({params: {id}}: Props){
    return (
        <div>Routing User Detail Page for {id}</div>
    )
}