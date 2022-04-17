import React, { useEffect } from "react"
import { useState } from "react/cjs/react.production.min"

const causesList = {
    medical: {
        name: "medical",
        color: "red-400",
        icon: 
        (
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 0H1.66667C0.75 0 0.00833333 0.75 0.00833333 1.66667L0 13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0ZM13.3333 13.3333H1.66667V1.66667H13.3333V13.3333ZM6.25 11.6667H8.75V8.75H11.6667V6.25H8.75V3.33333H6.25V6.25H3.33333V8.75H6.25V11.6667Z" fill="#EF4444"/>
</svg>


        )
    },
    poverty: {
        name: "poverty",
        color: "gold",
        icon: 
        (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66663 5.83335C1.66663 5.39133 1.84222 4.9674 2.15478 4.65484C2.46734 4.34228 2.89127 4.16669 3.33329 4.16669H16.6666C17.1087 4.16669 17.5326 4.34228 17.8451 4.65484C18.1577 4.9674 18.3333 5.39133 18.3333 5.83335V14.1667C18.3333 14.6087 18.1577 15.0326 17.8451 15.3452C17.5326 15.6578 17.1087 15.8334 16.6666 15.8334H3.33329C2.89127 15.8334 2.46734 15.6578 2.15478 15.3452C1.84222 15.0326 1.66663 14.6087 1.66663 14.1667V5.83335Z" stroke="#F1AE00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#F1AE00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 15.8334C15 14.9493 15.3511 14.1015 15.9763 13.4763C16.6014 12.8512 17.4492 12.5 18.3333 12.5M1.66663 7.50002C2.55068 7.50002 3.39853 7.14883 4.02365 6.52371C4.64877 5.89859 4.99996 5.05074 4.99996 4.16669L1.66663 7.50002Z" stroke="#F1AE00" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    },
    war: {
        name: "war",
        color: "grey-400",
        icon: 
        (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9166 7.50004C12.9166 7.38953 12.9605 7.28355 13.0387 7.20541C13.1168 7.12727 13.2228 7.08337 13.3333 7.08337H17.9166C18.0271 7.08337 18.1331 7.12727 18.2113 7.20541C18.2894 7.28355 18.3333 7.38953 18.3333 7.50004C18.3333 7.61055 18.2894 7.71653 18.2113 7.79467C18.1331 7.87281 18.0271 7.91671 17.9166 7.91671H13.3333C13.2228 7.91671 13.1168 7.87281 13.0387 7.79467C12.9605 7.71653 12.9166 7.61055 12.9166 7.50004Z" fill="#9CA3AF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81626 9.16669H13.2675C12.8842 6.78044 10.8933 5.00002 8.54167 5.00002C6.19001 5.00002 4.19917 6.78002 3.81667 9.16669H3.81626ZM2.97334 9.16877C2.91084 9.62502 3.29292 10 3.75292 10H13.33C13.7904 10 14.1729 9.62502 14.11 9.16877C13.7213 6.34085 11.3763 4.16669 8.54167 4.16669C5.70709 4.16669 3.36251 6.34085 2.97334 9.16877V9.16877ZM17.0054 11.6667H2.99459C2.80501 11.6667 2.66167 11.7517 2.58001 11.8588C2.54146 11.9058 2.5158 11.962 2.50558 12.0219C2.49535 12.0818 2.5009 12.1433 2.52167 12.2004L3.10376 13.8463C3.33876 14.5096 4.02042 15 4.83584 15H15.1642C15.9796 15 16.6613 14.51 16.8963 13.8459L17.4788 12.2009C17.4995 12.1437 17.505 12.0821 17.4947 12.0222C17.4844 11.9623 17.4586 11.9061 17.42 11.8592C17.3379 11.7517 17.195 11.6667 17.0054 11.6667V11.6667ZM2.99459 10.8334C2.08876 10.8334 1.44917 11.6692 1.73584 12.4788L2.31792 14.1238C2.67917 15.1446 3.69334 15.8334 4.83584 15.8334H15.1642C16.3067 15.8334 17.3208 15.1446 17.6821 14.1238L18.2642 12.4788C18.5508 11.6692 17.9113 10.8334 17.0054 10.8334H2.99459Z" fill="#9CA3AF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 13.75C6.36051 13.75 6.46649 13.7061 6.54463 13.628C6.62277 13.5499 6.66667 13.4439 6.66667 13.3334C6.66667 13.2229 6.62277 13.1169 6.54463 13.0387C6.46649 12.9606 6.36051 12.9167 6.25 12.9167C6.13949 12.9167 6.03351 12.9606 5.95537 13.0387C5.87723 13.1169 5.83333 13.2229 5.83333 13.3334C5.83333 13.4439 5.87723 13.5499 5.95537 13.628C6.03351 13.7061 6.13949 13.75 6.25 13.75V13.75ZM6.25 14.5834C6.58152 14.5834 6.89946 14.4517 7.13388 14.2173C7.3683 13.9828 7.5 13.6649 7.5 13.3334C7.5 13.0019 7.3683 12.6839 7.13388 12.4495C6.89946 12.2151 6.58152 12.0834 6.25 12.0834C5.91848 12.0834 5.60054 12.2151 5.36612 12.4495C5.1317 12.6839 5 13.0019 5 13.3334C5 13.6649 5.1317 13.9828 5.36612 14.2173C5.60054 14.4517 5.91848 14.5834 6.25 14.5834V14.5834ZM10 13.75C10.1105 13.75 10.2165 13.7061 10.2946 13.628C10.3728 13.5499 10.4167 13.4439 10.4167 13.3334C10.4167 13.2229 10.3728 13.1169 10.2946 13.0387C10.2165 12.9606 10.1105 12.9167 10 12.9167C9.88949 12.9167 9.78351 12.9606 9.70537 13.0387C9.62723 13.1169 9.58333 13.2229 9.58333 13.3334C9.58333 13.4439 9.62723 13.5499 9.70537 13.628C9.78351 13.7061 9.88949 13.75 10 13.75ZM10 14.5834C10.3315 14.5834 10.6495 14.4517 10.8839 14.2173C11.1183 13.9828 11.25 13.6649 11.25 13.3334C11.25 13.0019 11.1183 12.6839 10.8839 12.4495C10.6495 12.2151 10.3315 12.0834 10 12.0834C9.66848 12.0834 9.35054 12.2151 9.11612 12.4495C8.8817 12.6839 8.75 13.0019 8.75 13.3334C8.75 13.6649 8.8817 13.9828 9.11612 14.2173C9.35054 14.4517 9.66848 14.5834 10 14.5834ZM13.75 13.75C13.8605 13.75 13.9665 13.7061 14.0446 13.628C14.1228 13.5499 14.1667 13.4439 14.1667 13.3334C14.1667 13.2229 14.1228 13.1169 14.0446 13.0387C13.9665 12.9606 13.8605 12.9167 13.75 12.9167C13.6395 12.9167 13.5335 12.9606 13.4554 13.0387C13.3772 13.1169 13.3333 13.2229 13.3333 13.3334C13.3333 13.4439 13.3772 13.5499 13.4554 13.628C13.5335 13.7061 13.6395 13.75 13.75 13.75ZM13.75 14.5834C14.0815 14.5834 14.3995 14.4517 14.6339 14.2173C14.8683 13.9828 15 13.6649 15 13.3334C15 13.0019 14.8683 12.6839 14.6339 12.4495C14.3995 12.2151 14.0815 12.0834 13.75 12.0834C13.4185 12.0834 13.1005 12.2151 12.8661 12.4495C12.6317 12.6839 12.5 13.0019 12.5 13.3334C12.5 13.6649 12.6317 13.9828 12.8661 14.2173C13.1005 14.4517 13.4185 14.5834 13.75 14.5834Z" fill="#9CA3AF"/>
            </svg>
        )
    },
    food: {
        name: "food",
        color: "lightgold",
        icon: 
        (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66663 13.368C1.66663 12.8671 1.77746 12.37 2.07121 11.9646C2.93538 10.7709 5.27954 8.33337 9.99996 8.33337C14.7208 8.33337 17.0645 10.7713 17.9287 11.9646C18.2225 12.37 18.3333 12.8671 18.3333 13.368C18.3333 14.2428 17.9857 15.0819 17.3671 15.7005C16.7485 16.3192 15.9094 16.6667 15.0345 16.6667H4.96538C4.09049 16.6667 3.25144 16.3192 2.63281 15.7005C2.01417 15.0819 1.66663 14.2428 1.66663 13.368V13.368Z" stroke="#FCE7B1" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.6666 10.6013C15.3774 9.49169 13.2533 8.33335 9.99992 8.33335C6.74659 8.33335 4.62242 9.49127 3.33325 10.6013M4.99992 3.75002V5.41669V3.75002ZM5.83325 9.16669V10.8334V9.16669ZM14.9999 3.75002V5.41669V3.75002ZM14.1666 9.16669V10.8334V9.16669ZM9.99992 2.91669V5.41669V2.91669ZM9.99992 8.33335V11.6667V8.33335Z" stroke="#FCE7B1" stroke-width="1.66667" stroke-linecap="round"/>
            </svg>
        ),
    },
}

export default function PostPreview({ postId }) {

    const imgUrl = "https://media.istockphoto.com/photos/poor-indian-children-asking-for-help-picture-id1252924066?b=1&k=20&m=1252924066&s=170667a&w=0&h=qNQJ6tsPPj2A1xdqFrc3gsN-btrNW4CPH1fecRVf2xg="
    const name = "PoorGuy"
    const cause = causesList.medical
    const description = "Lorem Ipsum is simply dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesettiny dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into..."
    const donateTot = 100
    const donateCur = 30

    return (
        <div className="flex flex-col justify-between rounded-10px border-0.5px border-gray-400 w-400px h-400px hover:border-none hover:shadow-light">
            <img id="img" className="flex-shrink-0 w-full h-[180px] object-cover overflow-hidden border-none rounded-t-10px" src={imgUrl} />
            <div id='info' className="px-25px h-full">
                <div id="meta" className="flex justify-between item-baseline pt-15px pb-5px">
                    <div id="name" className="text-gray-600 text-18px font-medium">
                        {name}
                    </div>
                    <Cause cause={cause} />
                </div>
                <div id="description" className="h-[130px] text-14px text-gray-400 font-normal overflow-hidden">
                    {description}
                </div>
            </div>
            <DonationBar current={donateCur} total={donateTot} />
        </div>
    )
}

function Cause({ cause }) {
    return (
        <div className="flex flex-row items-center justify-end space-x-1">
            <div id="icon" className="w-20px h-20px flex justify-center items-center">{cause.icon}</div>
            <div id="cause" className={`h-20px flex items-center text-14px leading-none text-${cause.color}`}>{cause.name}</div>
        </div>
    )
}
function DonationBar({ current, total }) {

    useEffect(() => {
        console.log("rerender")
        parseInt(current / total * 400)
    }, [])

    return (
        <div className="relative flex-shrink-0 flex flex-row h-30px rounded-b-10px overflow-clip">
            <div className="absolute w-full h-full flex justify-center items-center text-white text-12px font-semibold">{current} / {total}</div>
            <div className="flex-shrink-0 bg-gold w-[120px]"></div>
            <div className="bg-lightgold w-full"></div>
        </div>
    )
}