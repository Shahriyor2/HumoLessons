// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router";

// import { useEffect } from "react";
// import { useNavigate } from "react-router";

// // export const Humo = () => {
// //     const authentifaceted = useSelector(
// //     (state) => state.userReducer.authentifaceted
// //   );
// //   const navigate = useNavigate()
// //   return (
// //     {
// //       authentifaceted ?
// //     <div style={{ color: "red" }}>
// //       Humo <br />
// //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odio.
// //       Ipsa natus officia sint at repudiandae quidem ad voluptates dolores eum
// //       voluptas eius fugiat nihil, nobis cumque libero incidunt voluptatum.
// //     </div> : navigate('/')
// //     }
// //   );
// // };

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";

// export const Humo = () => {
//   const authentifaceted = useSelector(
//     (state) => state.userReducer.authentifaceted
//   );
//   const navigate = useNavigate();

//   if (authentifaceted) {
//     return (
//       <div style={{ color: "red" }}>
//         Humo <br />
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odio.
//         Ipsa natus officia sint at repudiandae quidem ad voluptates dolores eum
//         voluptas eius fugiat nihil, nobis cumque libero incidunt voluptatum.
//       </div>
//     );
//   } else {
//     navigate("/");
//     return null;
//   }
// };

export const Humo = () => {
  return <div>Humo</div>;
};
