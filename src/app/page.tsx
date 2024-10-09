import {Sheet, Typography} from "@mui/joy";

export default async function Home() {
    return (
            <Sheet sx={{
                width: '100vw',
                height: '100vh',
                p: 3
            }}>
                <Typography level={'h2'} component={'h1'}>Application Root</Typography>
            </Sheet>
    );
}
