import { useEffect, useState, useRef } from "react";
import { Box3, Color, Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Image from "next/image";

function Avatar({ model }) {
  const myModel = useRef();
  useFrame(({ clock }) => {
    myModel.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.1;
    myModel.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.01;
  });
  return <primitive object={model} ref={myModel} />;
}

export default function AvatarModel() {
  const [model, setModel] = useState();
  //   const [active, setActive] = useState(false);

  useEffect(() => {
    //   load model
    const loader = new GLTFLoader();
    loader.load(
      "/models/avatar.glb",
      function (modelData) {
        let av = setupModel(modelData);
        if (av) {
          setModel(av);
        }
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);

  // extract model from file data
  function setupModel(data) {
    const model = data.scene.children[0];
    // remove hands from model
    model.children = model.children.filter((el) => el.name !== "Wolf3D_Hands");
    // center model
    const box = new Box3().setFromObject(model);
    const center = box.getCenter(new Vector3());
    model.position.x += model.position.x - center.x;
    model.position.y += model.position.y - center.y + 0.02;
    model.position.z += model.position.z - center.z;
    return model;
  }

  return (
    <div style={{ height: "100%", cursor: "pointer" }}>
      {model ? (
        <Canvas
          gl={{ antialias: true }}
          camera={{
            fov: 23,
            near: 0.1,
            far: 1000,
            position: [0, 0, 1],
          }}
        >
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI * 0.6}
            minPolarAngle={Math.PI * 0.25}
            dampingFactor={0.3}
          />
          <ambientLight intensity={1.5} color={new Color(0x3d3d3d)} />
          <pointLight
            intensity={1}
            color={new Color(0x3d3d3d)}
            position={[1, 0, 3]}
          />
          <spotLight
            intensity={1}
            color={new Color(0xffffff)}
            position={[0, 5, 4]}
          />
          <directionalLight
            intensity={1}
            color={new Color(0xffffff)}
            position={[-3, 6, -6]}
          />
          <directionalLight
            intensity={1}
            color={new Color(0xffffff)}
            position={[3, 6, -6]}
          />
          <Avatar model={model}></Avatar>
        </Canvas>
      ) : (
        <Image
          priority
          src={"/images/profile.png"}
          //   className={`${styles.profileImg}`}
          height={300}
          width={300}
          alt={"Profile Image"}
        />
      )}
    </div>
  );
}
