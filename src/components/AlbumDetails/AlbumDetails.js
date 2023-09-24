import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import CustomPagination from "../CustomPagination/CustomPagination";
import { convertMsToTime, errorHandler } from "../../config/helper-methods";
import { ReactComponent as LeftArrowIcon } from "../../assets/LeftArrowIcon.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/ShuffleIcon.svg";
import { ReactComponent as LibraryIcon } from "../../assets/LibraryIcon.svg";
import styles from "./AlbumDetails.module.css";

const AlbumDetails = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [albumDetails, setAlbumDetails] = useState({});
    const [page, setPage] = useState(1);

    const onPageChange = (pageNo) => {
        setPage(pageNo);
    };

    const totalTimeInMs = useMemo(() => {
        return albumDetails?.songs?.reduce((sum, item) => {
            return sum + item?.durationInMs;
        }, 0);
    }, [albumDetails]);

    const displayData = useMemo(() => {
        return albumDetails?.songs?.slice((page - 1) * 10, page * 10);
    }, [page, albumDetails]);

    const fetchAlbumDetails = async () => {
        try {
            const res = await axios.get(`https://qtify-backend-labs.crio.do/album/${slug}`);
            setAlbumDetails(res?.data?.id ? res.data : {});
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    };

    useEffect(() => {
        if (slug) {
            fetchAlbumDetails();
        } else {
            navigate("/");
        }
    }, [slug]);

    return (
        <div className={styles.wrapper}>
            <NavBar feedback={true} />

            <div className={styles.leftArrowWrapper}>
                <div className={styles.leftArrow} onClick={() => navigate(`-1`)}>
                    <LeftArrowIcon />
                </div>
            </div>

            <div className={styles.albums_content_wrapper}>
                <div className={styles.albums_content_header}>
                    <div className={styles.albums_img_container}>
                        <img src={albumDetails.image} alt="" width={288} height={329} />
                    </div>
                    <div className={styles.albums_header_text}>
                        <h1>Best of {albumDetails?.title} in 2023</h1>
                        <p>{albumDetails?.description}</p>
                        <div className={styles.songs_details}>
                            <p>{albumDetails?.songs?.length} songs</p>

                            <p>{convertMsToTime(totalTimeInMs)}</p>

                            <p>{albumDetails.follows} Follows</p>
                        </div>
                        <div className={styles.btn_container}>
                            <div className={styles.shuffle_btn_container}>
                                <ShuffleIcon />
                                <p>Shuffle</p>
                            </div>
                            <div className={styles.library_btn_container}>
                                <LibraryIcon />
                                <p>Add to library</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.pagination_container}>
                    <CustomPagination
                        page={page}
                        pageLimit={10}
                        totalCount={albumDetails?.songs?.length}
                        onPageChange={onPageChange}
                    />
                </div>

                <div className={styles.table_container}>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData?.map((each, index) => (
                                <tr className={"styles.table_row"} key={index}>
                                    <td className={styles.title_name}>
                                        <img src={each?.image} alt="title_image" width={59} height={64} />
                                        <p>{each?.title}</p>
                                    </td>

                                    <td>Rs.{each?.artists[0]}</td>
                                    <td>{convertMsToTime(each?.durationInMs)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AlbumDetails;
