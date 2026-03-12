import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const skillNames = [
  // Languages
  "Python", "Java", "JavaScript", "C", "SQL", "HTML", "CSS", "Bash",
  // Backend
  "REST API", "Node.js", "Spring Boot", "Auth Systems", "API Design", "Microservices",
  // Frameworks & Tools
  "Docker", "Git", "Supabase", "Vite", "GitHub", "Linux", "Flask", "Kafka", "Pandas", "JSON",
  // Databases
  "PostgreSQL", "SQL Design", "Data Modeling",
  // Security
  "Security+", "Wireshark", "SIEM", "Firewall", "VPN", "Forensics", "Pen Testing", "Threat Hunt",
  // Networking
  "TCP/IP", "DNS", "Packet Analysis", "HTTP/S",
  // Systems
  "Memory Mgmt", "OS Design", "Virtual Mem",
  // Web & DevOps
  "CI/CD", "Deployment", "Responsive UI",
  // AI / Robotics
  "Robotics API", "Data Pipeline",
  // Software Engineering
  "OOP", "Algorithms", "System Design", "Unit Testing",
];

function createTextTexture(text: string): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Circle background
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
  ctx.fillStyle = "#12002e";
  ctx.fill();

  // Purple border
  ctx.strokeStyle = "#7f40ff";
  ctx.lineWidth = 7;
  ctx.stroke();

  // Measure and wrap text
  const words = text.split(" ");
  const maxWidth = size * 0.7;
  let fontSize = text.length > 11 ? 26 : text.length > 7 ? 32 : 38;
  ctx.font = `600 ${fontSize}px sans-serif`;

  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);

  // If a single line is still too wide, shrink font
  if (lines.length === 1 && ctx.measureText(lines[0]).width > maxWidth) {
    fontSize = Math.floor(fontSize * (maxWidth / ctx.measureText(lines[0]).width));
    ctx.font = `600 ${fontSize}px sans-serif`;
  }

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const lineHeight = fontSize + 10;
  const totalHeight = lineHeight * lines.length;
  lines.forEach((line, i) => {
    const y = size / 2 - totalHeight / 2 + lineHeight * i + lineHeight / 2;
    ctx.fillText(line, size / 2, y);
  });

  return new THREE.CanvasTexture(canvas);
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = skillNames.map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)] as number,
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );
    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    return skillNames.map((name) => {
      const texture = createTextTexture(name);
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#c2a4ff",
        emissiveMap: texture,
        emissiveIntensity: 0.15,
        metalness: 0.4,
        roughness: 0.8,
        clearcoat: 0.2,
      });
    });
  }, []);

  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
